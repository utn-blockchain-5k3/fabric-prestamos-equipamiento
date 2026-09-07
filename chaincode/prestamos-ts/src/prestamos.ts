import { Context, Contract } from 'fabric-contract-api';

interface Equipo {
    id: string;
    responsable: string;
    destino: string;
}

const MSP_POR_ORG: Record<string, string> = {
    Org1: 'Org1MSP',
    Org2: 'Org2MSP',
};

export class PrestamosContract extends Contract {

    async InitLedger(ctx: Context): Promise<void> {
        const equipo: Equipo = { id: 'EQ-01', responsable: 'Org1', destino: 'Depósito' };
        await ctx.stub.putState(equipo.id, Buffer.from(JSON.stringify(equipo)));
    }

    async ReadEquipo(ctx: Context, id: string): Promise<Equipo> {
        const data = await ctx.stub.getState(id);
        if (!data || data.length === 0) throw new Error(`el equipo ${id} no existe`);
        return JSON.parse(data.toString()) as Equipo;
    }

    async TransferirEquipo(ctx: Context, id: string, nuevoResponsable: string, nuevoDestino: string): Promise<void> {
        const equipo = await this.ReadEquipo(ctx, id);
        const clienteMSP = ctx.clientIdentity.getMSPID();

        if (MSP_POR_ORG[equipo.responsable] !== clienteMSP) {
            throw new Error(`solo ${equipo.responsable} puede transferir el equipo ${id}; cliente recibido: ${clienteMSP}`);
        }

        equipo.responsable = nuevoResponsable;
        equipo.destino = nuevoDestino;
        await ctx.stub.putState(id, Buffer.from(JSON.stringify(equipo)));
    }

    async GetAllEquipos(ctx: Context): Promise<Equipo[]> {
        const iterator = await ctx.stub.getStateByRange('', '');
        const equipos: Equipo[] = [];

        let result = await iterator.next();
        while (!result.done) {
            equipos.push(JSON.parse(result.value.value.toString()) as Equipo);
            result = await iterator.next();
        }
        await iterator.close();

        return equipos;
    }
}

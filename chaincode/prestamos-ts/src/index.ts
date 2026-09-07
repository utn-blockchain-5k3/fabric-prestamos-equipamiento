import { type Contract } from 'fabric-contract-api';
import { PrestamosContract } from './prestamos';

export const contracts: typeof Contract[] = [PrestamosContract];

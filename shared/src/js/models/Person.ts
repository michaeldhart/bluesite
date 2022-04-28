import { Address } from './Address';
import { BaseEntity } from './BaseEntity';
import { Phone } from './Phone';

export interface Person extends BaseEntity {
  fullName: string;
  preferredName: string;
  address: Address[];
  phone: Phone[];
  email: string[];
}

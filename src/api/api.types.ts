import { StringKeyObject } from 'app/app.types';

export interface ApiResponse {
  data: StringKeyObject | null;
  error: StringKeyObject | null;
}

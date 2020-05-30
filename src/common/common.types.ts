export interface Children {
  children: React.ReactNode;
}

export type Dispatch = (action: any) => void;

export interface StringKeyObject {
  [key: string]: any;
}

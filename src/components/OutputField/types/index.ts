export type TOutputField = { id: number; type: 'field' | 'dropdown' };

export type TDropdownValue = { position: number; value: string };

export type TFieldValue = TDropdownValue;

export type TData = TDropdownValue | TFieldValue;

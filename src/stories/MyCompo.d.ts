export interface inputSchemaItem  {
    type: 'text'|'multiselect',
    label: String
}
export interface initObjType  {
    textAdd: String,
    inputSchema: inputSchemaItem[]
}

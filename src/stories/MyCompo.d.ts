export interface inputSchemaItem  {
    id:String,
    type: 'text'|'multiselect',
    label: String,
    value: String
}
export interface initObjType  {
    textAdd: String,
    inputSchema: inputSchemaItem[]
}

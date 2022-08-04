export interface inputSchemaItem$SelectedTag  {
    id: string,
    text: string
}
export interface inputSchemaItem  {
    id:string,
    type: 'text'|'multiselect',
    label: string,
    value: string,
    selected?: inputSchemaItem$SelectedTag []
    selectable?: inputSchemaItem$SelectedTag []
}
export interface initObjType  {
    shortName?: string
    textAdd: string,
    inputSchema: inputSchemaItem []
}
export interface NavLayoutRootData  {
    navRightTopButtons: {
        inputInitObject: initObjType[]
    }
}

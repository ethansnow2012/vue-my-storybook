import {NavLayoutRootData, initObjType} from '../dataTypes/MyTypes'
import { faker } from '@faker-js/faker';

export default {
    getNewInitObjType: async () : Promise<initObjType> => {
      return {
        id: faker.datatype.uuid(),
        shortName: "new",
        textAdd: "this is new",
        inputSchema: [
          {
            id: faker.datatype.uuid(),
            type:'multiselect', 
            label: 'label3', 
            value:"",
            selected: [

            ],
            selectable: [

            ]
          }
        ]
      }
    },
    navLayout: async () : Promise<NavLayoutRootData> =>  {
        return {
            navRightTopButtons:{
                inputInitObject: [
                    {
                        id:'dfffddhhh-0',
                        textAdd: 'this is text1',
                        inputSchema: [
                          {id: 'dsfasdgag-0', type:'text', label: 'label1', value:""},
                          {id: 'dsfasdgag-1', type:'text', label: 'label2', value:""},
                          {
                            id: 'dsfasdgag-2', 
                            type:'multiselect', 
                            label: 'label3', 
                            value:"",
                            selected: [

                            ],
                            selectable: [

                            ]
                          }
                        ]
                    },
                    {
                        id:'dfffddhhh-1',
                        shortName: 'dddd',
                        textAdd: 'this is text2',
                        inputSchema: [
                          {id: 'dsfasdgag-0', type:'text', label: 'label1', value:""},
                          {id: 'dsfasdgag-1', type:'text', label: 'label2', value:""},
                          {
                            id: 'dsfasdgag-2', 
                            type:'multiselect', 
                            label: 'label3', 
                            value:"",
                            selected: [
                              { id: 'jklgfkljghj-0', text: 'tag1'},
                              { id: 'jklgfkljghj-1', text: 'tag2'},
                              { id: 'jklgfkljghj-2', text: 'tag3'}
                            ],
                            selectable: [
                              { id: 'jklgfkljghj-0', text: 'tag1'},
                              { id: 'jklgfkljghj-1', text: 'tag2'},
                              { id: 'jklgfkljghj-2', text: 'tag3'},
                              { id: 'jklgfkljghj-3', text: 'tag3'},
                              { id: 'jklgfkljghj-4', text: 'tag4'},
                              { id: 'jklgfkljghj-5', text: 'tag5'},
                            ]
                          },
                        ]
                    },
                ]
            }
        }
    } 
}
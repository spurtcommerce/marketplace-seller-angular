

// filter dynamic columns
export const fields = {
    'dataExport.Module': true,
    'dataExport.ExportedBy': true,
    'dataExport.ExportedDateAndTime': true,
    'dataExport.RecordAvailable': true,
};  
// Remove empty keys
export function removeEmptyKeys(obj: any): any {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
        delete obj[key];
      }
    }
  }
  return obj;
}

// Table heading
export const customTable = [
  {
    displayName: 'dataExport.Module',
    id: 'module',
    type: 'default',
    checked: true,
    filterColName: 'dataExport.Module'
  },
  {
    displayName: 'dataExport.ExportedBy',
    id: 'vendorName',
    type: 'default',
    checked: true,
    filterColName: 'dataExport.ExportedBy'
  },
  {
    displayName: 'dataExport.ExportedDateAndTime',
    id: 'createDateby',
    type: 'template',
    checked: true,
    filterColName: 'dataExport.ExportedDateAndTime',
    customStyle: {
      tbody: {
          class: 'text-nowrap'
      },
  },

  },

  {
    displayName: 'dataExport.RecordAvailable',
    id: 'recordAvailable',
    type: 'default',
    checked: true,
    filterColName: 'dataExport.RecordAvailable',
    customStyle: {
      trow: {
          width: '20%',
          height: '3%',
          class: 'text-center'
      },
      tbody: {
          class: 'text-center'

      }
  },
  } 
]
// Obj form
export const objForm = {
 selectModule: {
    name: 'Select Module',
    label: 'Select Module',
    aliasName:'',
    validatiors: [],
    type: 'ngSelect',
    placeholder:'Select Module',
    customData: {
        data: [
            { name: 'Failed Orders', translate: 'dataExport.FaliedOrders' },
            { name: 'Manage Customers', translate: 'dataExport.Customers' },
            { name: 'Manage Products', translate: 'dataExport.ManageProduct' },
        ],
        key: 'name',
        value: 'name',
      }
  },
  
  // selectUser: {
  //   name: 'Select User',
  //   label: 'Select User',
  //   validatiors: [],
  //   type: 'text',
  //   placeholder:'Select User',
  // },

  dateAdded: {
    name: 'Date Added',
    label: 'Date Added',
    validatiors: [],
    type: 'date',
    placeholder:'Date Added',
  },

  Search: {
    label: '',
    name: 'Search',
    validatiors: [],
    type: 'text',
    placeholder:'configuration.SearchExportModule',
  }
}
// Content 
export const contentTranslate = {
  success: 'content.DataExport',
  failed: ''
};
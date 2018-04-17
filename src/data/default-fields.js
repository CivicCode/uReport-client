const defaultFields = [
  {
    'variable': true,
    'code': 'address_string',
    'datatype': 'location',
    'required': true,
    'datatype_description': '',
    'description': 'Drag the marker to the location for this report',
    'order': 1
  },
  {
    'variable': true,
    'code': 'firstName',
    'datatype': 'string',
    'required': true,
    'datatype_description': '',
    'description': 'First name',
    'order': 2
  },
  {
    'variable': true,
    'code': 'lastName',
    'datatype': 'string',
    'required': true,
    'datatype_description': '',
    description: 'Last name',
    'order': 3
  },
  {
    'variable': true,
    'code': 'phone',
    'datatype': 'string',
    'required': true,
    'datatype_description': '',
    description: 'Phone',
    'order': 4
  },
  {
    'variable': true,
    'code': 'email',
    'datatype': 'string',
    'required': true,
    'datatype_description': '',
    'description': 'Email',
    'order': 5
  },
  {
    'variable': true,
    'code': 'description',
    'datatype': 'text',
    'required': true,
    'datatype_description': '',
    description: 'Description',
    'order': 6
  },
  {
    'variable': true,
    'code': 'media',
    'datatype': 'media',
    'required': false,
    'datatype_description': '',
    description: 'Click or drag to upload a photo',
    'order': 7
  }
];

export default defaultFields;

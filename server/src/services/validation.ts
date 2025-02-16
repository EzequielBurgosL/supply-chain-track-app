import Ajv from "ajv";

const ajv = new Ajv();

const itemSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    color: { type: 'string' },
    price: { type: 'number' },
    description: { type: 'string' }
  },
  required: ['name', 'color', 'price'],
  additionalProperties: false
};

const eventSchema = {
  type: 'object',
  properties: {
    location: { type: 'string' },
    custodian: { type: 'string' },
  },
  required: ['location', 'custodian'],
  additionalProperties: false
};

const validateItem = ajv.compile(itemSchema);
const validateEvent = ajv.compile(eventSchema);

export const validateItemData = (data: any) => {
  const isValid = validateItem(data);
  if (!isValid) {
    throw new Error(`Invalid item data: ${JSON.stringify(validateItem.errors)}`);
  }
};


export const validateEventData = (data: any) => {
  const isValid = validateEvent(data);
  if (!isValid) {
    throw new Error(`Invalid event data: ${JSON.stringify(validateEvent.errors)}`);
  }
};

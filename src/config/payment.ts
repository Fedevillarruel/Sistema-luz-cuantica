import type { PaymentMethod, Region } from '@/types';

export const PAYMENT_METHODS: Record<Region, PaymentMethod[]> = {
  AR: [
    {
      type: 'transferencia',
      label: 'Transferencia Bancaria (ARS)',
      fields: [
        { label: 'Alias', value: 'sergiomadeo.g66', copyable: true },
        { label: 'CVU', value: '0000230300000034756038', copyable: true },
        { label: 'Titular', value: 'Sergio Andres Lopez Madeo', copyable: false },
      ],
    },
    {
      type: 'usd-argentina',
      label: 'Transferencia USD (desde Argentina)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'Account Number', value: '8339041548', copyable: true },
        { label: 'Account Type', value: 'Checking', copyable: false },
        { label: 'Routing Number', value: '026073150', copyable: true },
        { label: 'Swift/BIC', value: 'CMFGUS33', copyable: true },
        { label: 'Bank Name', value: 'Community Federal Savings Bank', copyable: false },
        { label: 'Bank Address', value: '5 Penn Plaza, 14th Floor, New York, NY 10001, US', copyable: false },
      ],
      notes: [
        'Solo aceptamos USD. Si pagás desde Argentina, confirmar con tu banco si es ACH o Wire.',
        'Si es Wire puede tener costo de recepción. Sugerimos prueba de 10 USD.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
    {
      type: 'sepa',
      label: 'Transferencia EUR (desde Argentina)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'IBAN', value: 'GB62TCCL00997921866116', copyable: true },
        { label: 'Bank Name', value: 'The Currency Cloud Limited', copyable: false },
        { label: 'Bank Address', value: '12 Steward Street, The Steward Building, London, E1 6FQ, GB', copyable: false },
      ],
      notes: [
        'Solo aceptamos EUR por SEPA.',
        'Confirmar con tu banco los costos de transferencia internacional en euros.',
        'Sugerimos prueba de 10 EUR antes del pago completo.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
  ],
  EU: [
    {
      type: 'sepa',
      label: 'Transferencia SEPA (EUR)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'IBAN', value: 'GB62TCCL00997921866116', copyable: true },
        { label: 'Bank Name', value: 'The Currency Cloud Limited', copyable: false },
        { label: 'Bank Address', value: '12 Steward Street, The Steward Building, London, E1 6FQ, GB', copyable: false },
      ],
      notes: [
        'Pedir transferencia SEPA en euros.',
        'No hace falta código SWIFT para transferencias en EUR dentro de la UE.',
        'Sugerimos prueba de 10 EUR antes del pago completo.',
        'Solo aceptamos EUR por SEPA, no SWIFT en euros.',
      ],
    },
    {
      type: 'wire',
      label: 'Wire Transfer (USD)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'Account Number', value: '8339041548', copyable: true },
        { label: 'Account Type', value: 'Checking', copyable: false },
        { label: 'Routing Number', value: '026073150', copyable: true },
        { label: 'Swift/BIC', value: 'CMFGUS33', copyable: true },
        { label: 'Bank Name', value: 'Community Federal Savings Bank', copyable: false },
        { label: 'Bank Address', value: '5 Penn Plaza, 14th Floor, New York, NY 10001, US', copyable: false },
      ],
      notes: [
        'Solo aceptamos USD.',
        'Confirmar con tu banco los costos de transferencia internacional.',
        'Sugerimos prueba de 10 USD antes del pago completo.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
  ],
  US: [
    {
      type: 'wire',
      label: 'Wire Transfer (USD)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'Account Number', value: '8339041548', copyable: true },
        { label: 'Account Type', value: 'Checking', copyable: false },
        { label: 'Routing Number', value: '026073150', copyable: true },
        { label: 'Swift/BIC', value: 'CMFGUS33', copyable: true },
        { label: 'Bank Name', value: 'Community Federal Savings Bank', copyable: false },
        { label: 'Bank Address', value: '5 Penn Plaza, 14th Floor, New York, NY 10001, US', copyable: false },
      ],
      notes: [
        'Solo aceptamos USD.',
        'Confirmar si es ACH o Wire. Wire puede tener costo de recepción.',
        'Sugerimos prueba de 10 USD.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
    {
      type: 'sepa',
      label: 'SEPA Transfer (EUR)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'IBAN', value: 'GB62TCCL00997921866116', copyable: true },
        { label: 'Bank Name', value: 'The Currency Cloud Limited', copyable: false },
        { label: 'Bank Address', value: '12 Steward Street, The Steward Building, London, E1 6FQ, GB', copyable: false },
      ],
      notes: [
        'Solo aceptamos EUR por SEPA.',
        'Sugerimos prueba de 10 EUR antes del pago completo.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
  ],
  INTL: [
    {
      type: 'wire',
      label: 'Wire Transfer (USD)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'Account Number', value: '8339041548', copyable: true },
        { label: 'Account Type', value: 'Checking', copyable: false },
        { label: 'Routing Number', value: '026073150', copyable: true },
        { label: 'Swift/BIC', value: 'CMFGUS33', copyable: true },
        { label: 'Bank Name', value: 'Community Federal Savings Bank', copyable: false },
        { label: 'Bank Address', value: '5 Penn Plaza, 14th Floor, New York, NY 10001, US', copyable: false },
      ],
      notes: [
        'Solo aceptamos USD.',
        'Confirmar con tu banco los costos de transferencia internacional.',
        'Sugerimos prueba de 10 USD antes del pago completo.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
    {
      type: 'sepa',
      label: 'SEPA Transfer (EUR)',
      fields: [
        { label: 'Account Holder Name', value: 'Sergio Andres Lopez Madeo', copyable: false },
        { label: 'IBAN', value: 'GB62TCCL00997921866116', copyable: true },
        { label: 'Bank Name', value: 'The Currency Cloud Limited', copyable: false },
        { label: 'Bank Address', value: '12 Steward Street, The Steward Building, London, E1 6FQ, GB', copyable: false },
      ],
      notes: [
        'Solo aceptamos EUR por SEPA.',
        'Confirmar con tu banco los costos de transferencia internacional.',
        'Sugerimos prueba de 10 EUR antes del pago completo.',
        'Concepto sugerido: "Pago Sergio + fecha".',
      ],
    },
  ],
};

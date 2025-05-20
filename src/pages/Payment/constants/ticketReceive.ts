export const TICKET_RECEIVE_METHOD = {
  VENUE: '현장수령',
  DELIVERY: '배송',
} as const;

export type TicketReceiveMethod =
  (typeof TICKET_RECEIVE_METHOD)[keyof typeof TICKET_RECEIVE_METHOD];

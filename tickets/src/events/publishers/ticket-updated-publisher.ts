import { Publisher, Subjects, TicketUpdatedEvent } from "@aaodoom/common";


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}


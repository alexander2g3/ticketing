import { Publisher, Subjects, TicketCreatedEvent } from "@aaodoom/common";


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}


import { Subjects, Publisher, PaymentCreatedEvent } from "@aaodoom/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
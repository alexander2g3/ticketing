import { OrderCreatedEvent, Publisher, Subjects } from "@aaodoom/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
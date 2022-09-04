import { OrderCancelledEvent, Publisher, Subjects } from "@aaodoom/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
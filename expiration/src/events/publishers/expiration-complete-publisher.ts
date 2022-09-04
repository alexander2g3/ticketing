import { ExpirationCompleteEvent, Publisher, Subjects } from "@aaodoom/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;

}
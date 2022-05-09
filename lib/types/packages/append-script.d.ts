interface config {
    url: string;
    doc?: Document;
    attrs?: Object;
}
export default function appendScript({ doc, url, attrs }: config): Promise<unknown>;
export {};

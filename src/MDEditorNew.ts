import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ref, createRef, Ref } from "lit/directives/ref.js";
import SimpleMDE from "easymde";

@customElement("md-editornew")
export class MDEditorNew extends LitElement {
  @property()
  initialValue: string = "";

  @property()
  value: string = "";

  easyMDE: SimpleMDE | null = null;
  inputRef: Ref<HTMLTextAreaElement> = createRef();

  getValue(): string {
    return this.easyMDE!.value();
  }

  render() {
    const faURL: string = chrome.runtime.getURL("vendorcss/all.min.css");
    const easyMDEURL: string = chrome.runtime.getURL(
      "vendorcss/easymde.min.css"
    );
    console.log(`FAURL ${faURL}`);
    console.log(`EasyMDEUrl ${easyMDEURL}`);
    return html`<div>
      <link rel="stylesheet" href="${faURL}" />
      <link rel="stylesheet" href="${easyMDEURL}" />
      <textarea ${ref(this.inputRef)}></textarea>
    </div>`;
  }

  firstUpdated(_changedProperties: any): void {
    super.firstUpdated(_changedProperties);
    const input = this.inputRef.value!;

    this.easyMDE = new SimpleMDE({ element: input });
    this.easyMDE.value(this.initialValue);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-editornew": MDEditorNew;
  }
}

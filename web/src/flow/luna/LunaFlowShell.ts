import "#elements/LoadingOverlay";

import Styles from "./LunaFlowShell.css" with { type: "bundled-text" };

import { AKElement } from "#elements/Base";

import { CSSResult, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ak-luna-flow-shell")
export class LunaFlowShell extends AKElement {
    static styles: CSSResult[] = [Styles];

    @property({ type: Boolean })
    public loading = false;

    render() {
        return html`<div class="luna-shell">
            <aside class="luna-art" aria-hidden="true">
                <div class="luna-logo">LUNA<span>TV</span></div>
                <div class="luna-pass">LUNA<br />PASS</div>
                <div class="luna-sun"></div>
                <p>WATCH TOGETHER<br />WHEREVER YOU ARE</p>
            </aside>
            <section class="luna-content">
                <div class="luna-copy">
                    <p>CLAIM YOUR INVITATION</p>
                    <h1>领取你的 LUNA TV 账号</h1>
                    <span>邀请资格已生效</span>
                </div>
                <div class="luna-stage"><slot></slot></div>
            </section>
            ${this.loading
                ? html`<div class="luna-loading"><ak-loading-overlay></ak-loading-overlay></div>`
                : null}
        </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "ak-luna-flow-shell": LunaFlowShell;
    }
}

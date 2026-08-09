import { Page } from "../../Page";
import { FancyLink } from "../../common/FancyLink";
import { Paragraph } from "../../common/Paragraph";

export function Contact() {
    return (
        <Page title="contact" >
            <Paragraph>
                Hi, my name is Austin and this is my website. Hope you enjoy.
            </Paragraph>
            <Paragraph>
                I don’t have any fancy philosophy behind my work. I just want to make things that will make people smile, and, even better, become a part of their daily rituals.
            </Paragraph>
            <Paragraph>
                I would love to talk about custom work, collaboring, or ...
            </Paragraph>
            <Paragraph>
                Reach out to me at <FancyLink mailTo="austinsclay@gmail.com">austinsclay@gmail.com</FancyLink>.
            </Paragraph>
            <Paragraph>
                Or stay in touch by following my Instagram account <FancyLink href="https://instagram.com/austins.studio">@austins.studio</FancyLink>.
            </Paragraph>
        </Page>
    );
}

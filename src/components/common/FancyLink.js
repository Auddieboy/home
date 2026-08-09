export function FancyLink({ children, mailTo, href }) {
    return (
        <span className="text-cobalt hover:text-terracotta font-semibold hover:cursor-pointer">
            <a href={href} mailTo={mailTo}>{children}</a>
        </span>
    )
}

import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {MDXProvider} from "@mdx-js/react";
import {Helmet} from "react-helmet";

const query = graphql`
    query DefaultPageLayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const DefaultPageLayout = ({children, pageContext, location}) => {
    const {site} = useStaticQuery(query);
    return (
        <article>
            <Helmet>
                <title>{pageContext.frontmatter.title ?? ''} — {site.siteMetadata.title}</title>
            </Helmet>
            <MDXProvider
                components={{
                    // foo: props => <label><input type="checkbox"/><span {...props}/></label>, // register <foo ...>...</foo>
                    // Bar: props => <label><input type="radio"/><span {...props}/></label>,    // register <Bar ...>...</Bar>
                    // p: props => <blockquote {...props}/>,                                    // customize paragraph
                    a: ({href, ...props}) => <Link to={href} {...props}/>
                }}
            >{children}</MDXProvider>
        </article>
    );
};

export default DefaultPageLayout;

import { Component } from 'react'
import { Helmet } from 'react-helmet';

export default class HelmetStyles extends Component {
    render() {
        return (
            <Helmet>
                <link href={`"data:image/x-icon;base64,${window.CUSTOM_FAV_ICON_BASE64}"`} rel="icon" type="image/x-icon" />

                <style type="text/css">{`
                    content {
                        accent-color: ${window.PRIMARY_COLOR};
                    }
                    .primary-color {
                        color: ${window.PRIMARY_COLOR};
                    }
                    .primary-background-color {
                        background-color: ${window.PRIMARY_COLOR};
                    }
                    .selected .checkbox-indicator {
                        background-color: ${window.PRIMARY_COLOR};
                        border-color: ${window.PRIMARY_COLOR};
                    }
                    data-card .title {
                        color: ${window.PRIMARY_COLOR};
                    }
                    a {
                        color: ${window.PRIMARY_COLOR};
                    }
                    dataset-metadata a {
                        color: ${window.PRIMARY_COLOR};
                    }
                    dataset-dictionary .view-link a {
                        color: ${window.PRIMARY_COLOR};
                    }
                    login-zone button.action {
                        background-color: ${window.PRIMARY_COLOR};
                    }
                    .call-to-action-button {
                        background-color: ${window.PRIMARY_COLOR};
                    }
                    dataset-view .react-tabs__tab--selected {
                        border-color: ${window.PRIMARY_COLOR};
                    }
                    query-form .action-button {
                        background-color: ${window.PRIMARY_COLOR};
                    }
                    paginator-element .selected {
                        color: ${window.PRIMARY_COLOR};
                        border-color: ${window.PRIMARY_COLOR};
                    }
                    api-example .curl {
                        background-color: ${window.PRIMARY_COLOR};
                    }
                    login-zone button.status {
                        color: ${window.PRIMARY_COLOR};
                    }
                    login-zone div.user-menu {
                        background-color: ${window.PRIMARY_COLOR};
                    }
                    dataset-detail-view dataset-details .keyword {
                        color: ${window.PRIMARY_COLOR};
                    }
                `}</style>
            </Helmet>
        );
    }
}

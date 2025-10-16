import { Fragment } from "react";
import { Page, PageSection } from "@patternfly/react-core";

export const CompassAutomations: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Page
        id="pf-compass-center"
        className="pf-m-no-sidebar pf-m-plain"
        isContentFilled
      >
        <PageSection>Title section: Automations</PageSection>
        <PageSection>Content section</PageSection>
      </Page>
    </Fragment>
  );
};

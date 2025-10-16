import { Fragment, useState } from "react";
import {
  Page,
  PageSection,
  Flex,
  FlexItem,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Button,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  Content,
  DrawerPanelBody,
} from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";

export const CompassDashboard: React.FunctionComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = (
    <>
      <DrawerHead>
        <span>Dashboard Details</span>
        <DrawerActions>
          <DrawerCloseButton onClick={onDrawerToggle} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Content component="h3">Dashboard Information</Content>
        <Content component="p">
          This drawer contains additional dashboard details and controls.
        </Content>
        <Content component="p">
          You can add charts, metrics, or other dashboard components here.
        </Content>
      </DrawerPanelBody>
    </>
  );

  return (
    <Fragment>
      <Page
        id="pf-compass-center"
        className="pf-m-no-sidebar pf-m-plain"
        isContentFilled
        notificationDrawer={drawerContent}
        isNotificationDrawerExpanded={isDrawerOpen}
      >
        <PageSection>
          <Flex alignItems={{ default: "alignItemsCenter" }}>
            <FlexItem grow={{ default: "grow" }}>
              <Title headingLevel="h1">Dashboard</Title>
            </FlexItem>
            <FlexItem>
              <Toolbar hasNoPadding>
                <ToolbarContent>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button
                        icon={<BarsIcon />}
                        variant="plain"
                        onClick={onDrawerToggle}
                        aria-label="Toggle drawer"
                      >
                        Details
                      </Button>
                    </ToolbarItem>
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button icon={<EllipsisVIcon />} variant="plain" />
                    </ToolbarItem>
                  </ToolbarGroup>
                </ToolbarContent>
              </Toolbar>
            </FlexItem>
          </Flex>
        </PageSection>
        <PageSection>Content section</PageSection>
      </Page>
    </Fragment>
  );
};

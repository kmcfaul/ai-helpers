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
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerPanelContent,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import BarsIcon from "@patternfly/react-icons/dist/esm/icons/bars-icon";
import { CardHorizontalGrid } from "./DashboardContent/CardHorizontalGrid";
import { CardStatus } from "./DashboardContent/CardStatus";
import { CardNested } from "./DashboardContent/CardNested";
import { RecommendationsCard } from "./DashboardContent/RecommendationsCard";
import { CardDetailsDemo } from "./DashboardContent/CardDetailsDemo";
import { InventoryCard } from "./DashboardContent/InventoryCard";
import { CardEventsView } from "./DashboardContent/CardEventsView";

export const CompassDashboard: React.FunctionComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isContentDrawerOpen, setIsContentDrawerOpen] = useState(false);

  const onDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onContentDrawerToggle = () => {
    setIsContentDrawerOpen(!isContentDrawerOpen);
  };

  const drawerContent = (
    <DrawerPanelContent>
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
    </DrawerPanelContent>
  );

  const contentDrawerContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span>Content Details</span>
        <DrawerActions>
          <DrawerCloseButton onClick={onContentDrawerToggle} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelBody>
        <Content component="h3">Content Information</Content>
        <Content component="p">
          This drawer contains detailed information about the dashboard content.
        </Content>
        <Content component="p">
          You can add filters, settings, or other content controls here.
        </Content>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <Fragment>
      <Drawer isExpanded={isDrawerOpen}>
        <DrawerContent panelContent={drawerContent}>
          <DrawerContentBody>
            <Page
              id="pf-compass-center"
              className="pf-m-no-sidebar pf-m-plain"
              isContentFilled
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
                          <ToolbarItem>
                            <Button
                              icon={<BarsIcon />}
                              variant="secondary"
                              onClick={onContentDrawerToggle}
                              aria-label="Toggle content drawer"
                            >
                              Content Details
                            </Button>
                          </ToolbarItem>
                        </ToolbarGroup>
                      </ToolbarContent>
                    </Toolbar>
                  </FlexItem>
                </Flex>
              </PageSection>
              <Drawer isExpanded={isContentDrawerOpen}>
                <DrawerContent panelContent={contentDrawerContent}>
                  <DrawerContentBody>
                    <PageSection>
                      <Grid hasGutter>
                        <CardHorizontalGrid />
                        <GridItem lg={4} xl2={6} order={{ lg: "3" }}>
                          <Flex direction={{ default: "column" }}>
                            <CardStatus />
                            <CardNested />
                            <RecommendationsCard />
                          </Flex>
                        </GridItem>
                        <GridItem lg={4} xl2={3} order={{ lg: "2" }}>
                          <Flex
                            direction={{
                              default: "column",
                              md: "row",
                              lg: "column",
                            }}
                          >
                            <FlexItem flex={{ default: "flex_1" }}>
                              <CardDetailsDemo />
                            </FlexItem>
                            <FlexItem flex={{ default: "flex_1" }}>
                              <InventoryCard />
                            </FlexItem>
                          </Flex>
                        </GridItem>
                        <GridItem lg={4} xl2={3} order={{ lg: "4" }}>
                          <Flex direction={{ default: "column" }}>
                            <CardEventsView />
                          </Flex>
                        </GridItem>
                      </Grid>
                    </PageSection>
                  </DrawerContentBody>
                </DrawerContent>
              </Drawer>
            </Page>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
};

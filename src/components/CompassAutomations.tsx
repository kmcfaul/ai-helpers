import { Fragment } from "react";
import {
  Flex,
  FlexItem,
  Title,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Button,
} from "@patternfly/react-core";
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";
import { CompassAutomationTopology } from "../automationTopology/CompassAutomationTopology.tsx";
import { CompassPage } from "./lib/CompassPage";
import { CompassPageBody } from "./lib/CompassPageBody";

export const CompassAutomations: React.FunctionComponent = () => {
  return (
    <Fragment>
      <CompassPage
        toolbar={
          <Flex alignItems={{ default: "alignItemsCenter" }}>
            <FlexItem grow={{ default: "grow" }}>
              <Title headingLevel="h1">Automations</Title>
            </FlexItem>
            <FlexItem>
              <Toolbar hasNoPadding>
                <ToolbarContent>
                  <ToolbarGroup></ToolbarGroup>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button icon={<EllipsisVIcon />} variant="plain" />
                    </ToolbarItem>
                  </ToolbarGroup>
                </ToolbarContent>
              </Toolbar>
            </FlexItem>
          </Flex>
        }
        body={
          <CompassPageBody
            pageSectionProps={{ isFilled: true, hasBodyWrapper: false }}
          >
            <CompassAutomationTopology />
          </CompassPageBody>
        }
      />
    </Fragment>
  );
};

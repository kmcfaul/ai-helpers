import { useState } from "react";
import { Content } from "@patternfly/react-core";
import { Table, Thead, Tr, Th, Tbody, Td } from "@patternfly/react-table";

export const SwitchToolTable: React.FunctionComponent = () => {
  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const [selectedRepoName, setSelectedRepoName] = useState("");

  return (
    <Table aria-label="Clickable table">
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {(() => {
          const rows = [];
          for (let i = 0; i < 30; i++) {
            const repoName = `Repository ${i + 1}`;
            rows.push(
              <Tr
                key={repoName}
                onRowClick={() => setSelectedRepoName(repoName)}
                isSelectable
                isClickable
                isRowSelected={selectedRepoName === repoName}
              >
                <Td dataLabel="Name">{repoName}</Td>
                <Td dataLabel="Branches">
                  <Content component="p">Tool name</Content>
                  <Content component="small">Tool description</Content>
                </Td>
              </Tr>
            );
          }
          return rows;
        })()}
      </Tbody>
    </Table>
  );
};

import { OrganizationList } from "@clerk/nextjs";

function SelectOrganization() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={"/organizations/:id"}
      afterSelectOrganizationUrl={"/organizations/:id"}
    />
  );
}

export default SelectOrganization;

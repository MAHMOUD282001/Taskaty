import { OrganizationSwitcher } from "@clerk/nextjs";
import OrgControl from "./_components/org-control";

interface IProps {}

function OrganizationIdPage({}: IProps) {
  return (
    <div>
      <OrgControl />
      Main Content
    </div>
  );
}

export default OrganizationIdPage;

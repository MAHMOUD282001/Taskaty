import { OrganizationSwitcher } from "@clerk/nextjs";

interface IProps {}

function OrganizationIdPage({}: IProps) {
  return <OrganizationSwitcher hidePersonal />;
}

export default OrganizationIdPage;

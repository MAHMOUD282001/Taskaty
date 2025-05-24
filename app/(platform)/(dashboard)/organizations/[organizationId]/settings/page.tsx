import { OrganizationProfile } from "@clerk/nextjs";

interface IProps {}

function SettingsPage({}: IProps) {
  return <div className="w-full">
    <OrganizationProfile 
    appearance={{
        elements: {
            rootBox: {
                width: "100%",
                boxShadow: "none"
            },
            cardBox: {
                boxShadow: "none",
                border: "1px solid #e5e7eb",
                width: "100%"
            }
        }
    }}
    />
    
  </div>;
}

export default SettingsPage;

import ProfileDrawer from "@/components/Dashboard/ProfileDrawer";

const myProfilePage = ({ children }: { children: React.ReactNode }) => {
  return <ProfileDrawer>{children}</ProfileDrawer>;
};

export default myProfilePage;

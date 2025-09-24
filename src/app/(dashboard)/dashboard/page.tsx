import logout from "@/actions/auth/logout";
import { Button } from "@/components/ui/Button";

const page = () => {
  return (
    <div>
      <Button onClick={logout}>logout</Button>
    </div>
  );
};

export default page;

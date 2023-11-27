import { Button } from "antd";
import styles from "./styles.module.css";
import Link from "next/link";
const AdminPage = () => {

  return (
    <div>
      <h1 className={styles.profileHeader}>Admin Profile</h1>

      <Link href={`/admin/manage-user`}>
        <Button type="primary" className={styles.profileButton}>
          Manage Profile
        </Button>
      </Link>
    </div>
  );
};

export default AdminPage;

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from  "../List/List"
import styles from "./style.module.css"
export default function TemporaryDrawer({ open ,setOpen  , cartData , AddToCart , RemoveFromCart , DeleteCarts}) {
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="right"
          open={open}
          onClose={() =>setOpen(false)}
          >

        <Box
          role = "presentation"
          sx={{width : 300}}
           
          >
            <div className={styles.btnContainer}>

            <button onClick={()=>DeleteCarts()} className={styles.deleteAllBtn} >Delete All</button>
            </div>
            <List RemoveFromCart={RemoveFromCart} AddToCart={AddToCart} cartData={cartData} />
    </Box>

          </Drawer>
      </React.Fragment>
    </div>
  );
}
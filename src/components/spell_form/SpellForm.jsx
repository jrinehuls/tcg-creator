import { useState } from "react";
import styles from "./SpellForm.module.css";


function SpellForm() {
    return(
        <div className={styles.container}>
            <h1></h1>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}></label>
                        <div className={styles.inputArea}>
                            <input className={styles.inputText}></input>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}></label>
                        <div className={styles.inputArea}>
                            <input className={styles.inputText}></input>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel}></label>
                        <div className={styles.inputArea}>
                            <input className={styles.inputText}></input>
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.submitButton} type="button" >Submit</button >
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SpellForm;

import React, {useState} from 'react'
import {Button, ActionSheet, ActionSheetButton} from "react-onsenui"

export default function ActionSheetExample() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button onClick={handleClick}>Action Sheet Open</Button>
            <ActionSheet isOpen={open} title="action sheet">
                <ActionSheetButton modifier="destructive">
                    Label 1
                </ActionSheetButton>
                <ActionSheetButton>
                    Label 2
                </ActionSheetButton>
                <ActionSheetButton>
                    save
                </ActionSheetButton>
                <ActionSheetButton>
                    cancel
                </ActionSheetButton>
            </ActionSheet>
        </div>
    )
}

import React, {useCallback} from "react";
import TrialForm from "../../components/TrialForm";

const TrialFormContainer = () => {
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        e.target.reset();
    }, []);

    return (
        <TrialForm onSubmit={onSubmit} />
    );
};

export default TrialFormContainer;

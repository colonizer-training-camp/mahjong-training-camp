import { FilterOptionsState } from "@mui/base";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useGlobals } from "../../contexts/GlobalsContext";
import { UserResponse } from "../../types/UserResponse";
import Autocomplete from "../commons/Autocomplete";

interface Props {
  value: UserResponse | null;
  exceptIds?: number[];
  onChange?: (value: UserResponse | null) => void;
  setToMyself?: boolean;
  fullWidth?: boolean;
}

const JyanshiSelect = ({
  value,
  exceptIds,
  onChange,
  setToMyself,
  fullWidth,
}: Props) => {
  const { user } = useAuth();
  const { jyanshis } = useGlobals();

  const [initialSetToMyself, setInitialSetToMyself] = useState(false);

  const filteredJyanshis = useMemo(
    () => (jyanshis || []).filter((x) => !exceptIds?.includes(x.userId)),
    [exceptIds, jyanshis]
  );

  useEffect(() => {
    if (
      !value &&
      jyanshis &&
      onChange &&
      user &&
      setToMyself &&
      !initialSetToMyself
    ) {
      const foundMyself = jyanshis.find((j) => j.userId === user.userId);
      if (foundMyself) {
        setInitialSetToMyself(true);
        onChange(foundMyself);
      }
    }
  }, [initialSetToMyself, jyanshis, onChange, setToMyself, user, value]);

  const filterJyanshi = useCallback(
    (options: UserResponse[], state: FilterOptionsState<UserResponse>) => {
      return options.filter(
        (x) =>
          x.displayName
            .toLocaleLowerCase()
            .startsWith(state.inputValue.toLocaleLowerCase()) ||
          x.loginId
            .toLocaleLowerCase()
            .startsWith(state.inputValue.toLocaleLowerCase())
      );
    },
    []
  );

  if (!jyanshis) {
    return null;
  }

  return (
    <Autocomplete
      options={filteredJyanshis}
      getOptionKey={(x) => x.userId}
      getOptionLabel={(x) => x.displayName}
      filterOptions={filterJyanshi}
      isOptionEqualToValue={(o, v) => o.userId === v?.userId}
      value={value}
      onChange={(_, v, reason) => {
        if (reason === "selectOption" || reason === "blur") {
          onChange?.(v);
        }
      }}
      slotProps={
        fullWidth
          ? {
              root: {
                style: {
                  width: "100%",
                },
              },
            }
          : undefined
      }
      autoHighlight
      filterSelectedOptions
    />
  );
};

export default JyanshiSelect;

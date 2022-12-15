import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API } from "@env";
import { useDispatch } from "react-redux";

import { getOrigin, getDestination } from "../../store/coordinate";

const GooglePlacesInput = ({ placeholder, tag }) => {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      onPress={(data, details = null) => {
        //console.log(data, details);
        if (tag === "origin") {
          dispatch(getOrigin(details.geometry.location));
        } else {
          dispatch(getDestination(details.geometry.location));
        }
      }}
      query={{
        key: GOOGLE_MAPS_API,
        language: "en",
      }}
      fetchDetails={true}
      returnKeyType={"search"}
      enablePoweredByContainer={false}
      minLength={2}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 14,
          fontFamily: "line-regular",
        },
        placeholder: {
          fontFamily: "line-thin",
        },
      }}
    />
  );
};

export default GooglePlacesInput;

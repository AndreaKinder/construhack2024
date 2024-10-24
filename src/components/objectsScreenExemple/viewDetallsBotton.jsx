import React from "react";
import { View } from "react-native";
import ViewModal from "../common/viewModal";
import CompositionDetallsTextItem from "./DetallsTextItemsComponents/General/CompositionDetallsTextItem";
import GeneralDetallsTextItem from "./DetallsTextItemsComponents/General/GeneralDetallsTextItem";
import QuantityAvailableDetallsTextItem from "./DetallsTextItemsComponents/General/QuantityAvailableDetallsTextItem";
import SecurityDetallsTextItems from "./DetallsTextItemsComponents/Seguridad/SecurityDetallsTextItems";
import FisicPropietyTextItem from "./DetallsTextItemsComponents/Seguridad/FisicPropietyTextItem";
import DetallesEconomiaCircularTextItem from "./DetallsTextItemsComponents/EconomyTextItem";

export default function DetallsTextItems({ item }) {
    return (
        <View>
          <ViewModal  text={"Detalles"}>
            <GeneralDetallsTextItem item={item} />
            <CompositionDetallsTextItem item={item} />
            <QuantityAvailableDetallsTextItem item={item} />
            <SecurityDetallsTextItems item={item} />
            <FisicPropietyTextItem item={item} />
            <DetallesEconomiaCircularTextItem item={item} />
          </ViewModal>
        </View>
    );
}

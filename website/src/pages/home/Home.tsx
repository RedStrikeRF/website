import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { i18n } = useTranslation();
  
  return (
    <div className="HomePage">
      `${i18n.t("test")}`
    </div>
    
  )
}
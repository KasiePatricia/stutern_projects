import React from "react";

const FooterDown = () => {
  return (
    <div className="flex justify-between bg-[#f2f2f2] text-[#70757a] text-[0.875rem] py-[0.938rem] px-[1.875rem]">
      <div className="flex gap-4">
        <a href="#">About</a>
        <a href="#">Advertising</a>
        <a href="#">Business</a>
        <a href="#">How Search works</a>
      </div>
      <div className="flex gap-2">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
          className="w-[1rem]"
        />
        <span>Carbon neutral since 2007</span>
      </div>
      <div className="flex gap-4">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Settings</a>
      </div>
    </div>
  );
};

export default FooterDown;

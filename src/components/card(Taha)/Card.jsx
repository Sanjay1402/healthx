const Card = (props) => {
  return (
    <div className="mb-5 flex">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={props.img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold green">
              Healthx transforming Pakistan in healthcare sector, says khaqan
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
            Khaqan's endorsement of HealthX highlights its growing impact on
            Pakistan's healthcare sector. By leveraging technology to improve
            healthcare delivery.....
          </p>
          <a
            href="#"
            class="inline-flex items-center  py-2 text-sm font-medium text-center text-white orange rounded-lg"
          >
            <b>Keep Reading</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

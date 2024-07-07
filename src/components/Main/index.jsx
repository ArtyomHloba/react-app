function Main({isLogin, user:{specOffers}}) {
    const offerStyle ={
        color: "red"
    }

  return (
    <main>
      <p className={isLogin ? offerStyle : {}}>
        {isLogin ? specOffers : "Register for up to -50%"}
      </p>
    </main>
);
}

export default Main
import StepItem from "../../molecules/StepItem";

export default function TransactionStep(){
    return (
        <section id="feature" className="feature pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">It’s Really That<br/> Easy to Win the Game
                </h2>
                <div className="row gap-lg-0 gap-4" data-aos="fade-up">
                    <StepItem icon={"step1"} title={'1. Start'} desc1={'Pilih salah satu game'} desc2={'yang ingin kamu top up.'}/>
                    <StepItem icon={"step2"} title={'2. Start'} desc1={'Pilih salah satu game'} desc2={'yang ingin kamu top up.'}/>
                    <StepItem icon={"step3"} title={'3. Start'} desc1={'Pilih salah satu game'} desc2={'yang ingin kamu top up.'}/>
                    <div className="col-lg-4">
                        <div className="card feature-card border-0">

                            <p className="fw-semibold text-2xl mb-2 color-palette-1">2. Fill Up</p>
                            <p className="text-lg color-palette-1 mb-0">Top up sesuai dengan<br/>
                                nominal yang sudah tersedia</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card feature-card border-0">

                            <p className="fw-semibold text-2xl mb-2 color-palette-1">3. Be a Winner</p>
                            <p className="text-lg color-palette-1 mb-0">Siap digunakan untuk<br/>
                                improve permainan kamu</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
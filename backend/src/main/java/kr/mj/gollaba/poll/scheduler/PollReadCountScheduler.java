package kr.mj.gollaba.poll.scheduler;

import kr.mj.gollaba.common.Scheduler;
import kr.mj.gollaba.poll.service.PollReadCountService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;

@Scheduler
@RequiredArgsConstructor
public class PollReadCountScheduler {

    private final PollReadCountService readCountService;

    @Scheduled(cron = "0 5 * * * *")
    public void saveReadCount() {
        readCountService.saveReadCount();
    }

}

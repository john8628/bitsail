/*
 * Copyright 2022 Bytedance Ltd. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bytedance.bitsail.connector.legacy.hudi.sink.partitioner;

import com.bytedance.bitsail.connector.legacy.hudi.sink.partitioner.profile.WriteProfile;
import com.bytedance.bitsail.connector.legacy.hudi.sink.partitioner.profile.WriteProfiles;

import org.apache.hudi.client.common.HoodieFlinkEngineContext;
import org.apache.hudi.common.model.HoodieTableType;
import org.apache.hudi.config.HoodieWriteConfig;

/**
 * Utilities for {@code BucketAssigner}.
 */
public abstract class BucketAssigners {

  private BucketAssigners() {
  }

  /**
   * Creates a {@code BucketAssigner}.
   *
   * @param taskID           The task ID
   * @param maxParallelism   The max parallelism
   * @param numTasks         The number of tasks
   * @param ignoreSmallFiles Whether to ignore the small files
   * @param tableType        The table type
   * @param context          The engine context
   * @param config           The configuration
   * @return the bucket assigner instance
   */
  public static BucketAssigner create(
      int taskID,
      int maxParallelism,
      int numTasks,
      boolean ignoreSmallFiles,
      HoodieTableType tableType,
      HoodieFlinkEngineContext context,
      HoodieWriteConfig config) {
    boolean delta = tableType.equals(HoodieTableType.MERGE_ON_READ);
    WriteProfile writeProfile = WriteProfiles.singleton(ignoreSmallFiles, delta, config, context);
    return new BucketAssigner(taskID, maxParallelism, numTasks, writeProfile, config);
  }
}